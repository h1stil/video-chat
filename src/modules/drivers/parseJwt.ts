import jwt_decode from "jwt-decode";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZmQGZmLmNvIiwiaWQiOjE3LCJyb2xlcyI6W3siaWQiOjIsInZhbHVlIjoiVVNFUiIsImRlc2NyaXB0aW9uIjoiUmVnaXN0cmF0ZWQgdXNlciIsImNyZWF0ZWRBdCI6IjIwMjMtMDItMDRUMTA6MTM6MjQuNjE2WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDItMDRUMTA6MTM6MjQuNjE2WiIsIlVzZXJSb2xlcyI6eyJpZCI6MTMsInJvbGVJZCI6MiwidXNlcklkIjoxN319XSwiaWF0IjoxNjc2NzA1NDU1LCJleHAiOjE2NzY3OTE4NTV9.uagDp2HBY49tAn_9O-JlZgqbR2PyGVqX4w6wVlgSZRs";

const decode: any = jwt_decode(token, { header: true });

console.log(Object.keys(decode));
console.log(Object.values(decode));
console.log(decode.at("id"));
