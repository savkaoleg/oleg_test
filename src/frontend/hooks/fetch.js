export const defaultParams = {};

/**
 * HTTP GET
 * @param  {string} url
 * @return {Promise}
 */
export function read(url) {
  return fetch(url, {
    ...defaultParams,
    method: 'get'
  });
}

/**
 * HTTP POST
 * @param  {string} url
 * @param  {object} body
 * @return {Promise}
 */
export function create(url, body = {}) {
  return fetch(url, {
    ...defaultParams,
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(body)
  });
}

/**
 * HTTP PUT
 * @param  {string} url
 * @param  {object} body
 * @return {Promise}
 */
export function update(url, body = {}) {
  return fetch(url, {
    ...defaultParams,
    method: 'put',
    body: JSON.stringify(body)
  })
}

export function patch(url, body = {}){
  return fetch(url, {
    ...defaultParams,
    method: 'PATCH',
    body: JSON.stringify(body)
  })
}

/**
 * HTTP DELETE
 * @param  {string} url
 * @return {Promise}
 */
export function destroy(url) {
  return fetch(url, {
    ...defaultParams,
    method: 'delete'
  });
}
