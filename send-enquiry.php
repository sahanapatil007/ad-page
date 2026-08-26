<?php
header("Content-Type: application/json; charset=utf-8");
header("X-Content-Type-Options: nosniff");

function field($key, $max = 2000) {
  $value = isset($_POST[$key]) ? trim((string) $_POST[$key]) : "";
  $value = preg_replace("/[\r\n]+/", " ", $value);
  if (strlen($value) > $max) $value = substr($value, 0, $max);
  return $value;
}

if (($_SERVER["REQUEST_METHOD"] ?? "") !== "POST") {
  http_response_code(405);
  echo json_encode(["success" => false, "message" => "Method not allowed"]);
  exit;
}

if (field("bot-field", 200) !== "") {
  echo json_encode(["success" => true]);
  exit;
}

$name = field("name", 120);
$phone = field("phone", 20);
$email = field("email", 120);
$interest = field("interest", 80);
$budget = field("budget", 80);
$location = field("location", 160);
$message = field("message", 2000);
$subject = field("subject", 180);

if ($name === "" || $phone === "" || $email === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "Missing required fields"]);
  exit;
}

if ($subject === "") {
  $subject = "Project enquiry from " . $name;
}

$to = "info@buildabo.in";
$lines = [
  "New website enquiry",
  "",
  "Name: " . $name,
  "Phone: " . $phone,
  "Email: " . $email,
];
if ($interest !== "") $lines[] = "Project type: " . $interest;
if ($budget !== "") $lines[] = "Budget: " . $budget;
if ($location !== "") $lines[] = "Location: " . $location;
if ($message !== "") {
  $lines[] = "";
  $lines[] = "Message:";
  $lines[] = str_replace(["\r", "\n"], ["", "\n"], isset($_POST["message"]) ? trim((string) $_POST["message"]) : "");
}

$body = implode("\n", $lines);
$headers = [
  "From: buildabo website <info@buildabo.in>",
  "Reply-To: " . $email,
  "MIME-Version: 1.0",
  "Content-Type: text/plain; charset=UTF-8",
];

$sent = @mail($to, "=?UTF-8?B?" . base64_encode($subject) . "?=", $body, implode("\r\n", $headers));
if (!$sent) {
  http_response_code(500);
  echo json_encode(["success" => false, "message" => "Mail not sent"]);
  exit;
}

echo json_encode(["success" => true]);
