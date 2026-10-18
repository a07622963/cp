// Shows VacoTV API responses as Shadowrocket notifications (read-only, changes nothing)
const url = ($request && $request.url) || "";
const path = url.replace(/^https?:\/\/[^/]+/, "").split("?")[0];
const b = ($response && $response.body) || "EMPTY";
console.log(path + " => " + b);
const isMain = path.indexOf("check_version") !== -1;
const limit = isMain ? 3200 : 600;
for (let i = 0; i < Math.min(b.length, limit); i += 800) {
  $notification.post(path + " " + (i / 800 + 1), "", b.slice(i, i + 800));
}
$done({});
