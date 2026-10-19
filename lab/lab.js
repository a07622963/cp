// Starter script: shows the response and changes nothing.
// Replace this with your own solution, then send it to Claude to upload.
const url = $request.url;
const body = $response.body || "";
$notification.post("LAB " + url.split("/").pop(), "", body.slice(0, 800));
$done({});
