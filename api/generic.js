"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticatedFetch = authenticatedFetch;
exports.del = del;
exports.get = get;
exports.patch = patch;
exports.post = post;
exports.put = put;
async function getAccessToken() {
  return "";
}
async function authenticatedFetch(...args) {
  const accessToken = await getAccessToken();
  const response = await fetch(args[0], {
    ...args[1],
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      ...(accessToken ? {
        authorization: `Bearer ${accessToken}`
      } : {}),
      ...args[1]?.headers
    }
  });
  return await response.json();
}
async function get(url, query = {}, options = {}) {
  let resolvedUrl = url;
  if (Object.keys(query).length > 0) {
    resolvedUrl = `${resolvedUrl}?${new URLSearchParams(query).toString()}`;
  }
  return await authenticatedFetch(resolvedUrl, {
    ...options,
    method: "GET"
  });
}
async function post(url, body = {}, options = {}) {
  return await authenticatedFetch(url, {
    ...options,
    method: "POST",
    body: JSON.stringify(body)
  });
}
async function put(url, body = {}, options = {}) {
  return await authenticatedFetch(url, {
    ...options,
    method: "PUT",
    body: JSON.stringify(body)
  });
}
async function patch(url, body = {}, options = {}) {
  return await authenticatedFetch(url, {
    ...options,
    method: "PATCH",
    body: JSON.stringify(body)
  });
}
async function del(url, body = {}, options = {}) {
  return await authenticatedFetch(url, {
    ...options,
    method: "DELETE",
    body: JSON.stringify(body)
  });
}