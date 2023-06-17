const $api = {
  async post(url, payload, accessToken) {
    console.log(url);
    const { data, pending, error, refresh } = await useFetch(url, {
      onRequest({ request, options }) {
        // Set the request headers
        options.body = payload;
        options.method = "POST";
        options.headers = options.headers || {};
        if (accessToken)
          options.headers.Authorization = `Bearer ${accessToken()}`; // Set the authorization token ...
        options.headers.contentType = "multipart/form-data"; // Required for uploading images ...
        options.headers.accept = "application/json"; // header accept application/json is required ... Otherwise backend throws 302 status ...
      },
      onRequestError({ request, options, error }) {
        // Handle the request errors
      },
      onResponse({ request, response, options }) {
        // Process the response data
        if (response.status === 200 && __.showSuccess)
          dispatchSuccess(__.successMessage || "Success!"); // Success Message ...
        return response._data;
      },
      onResponseError({ request, response, options }) {
        // Handle the response errors
        if (__.showError) dispatchError(response, __.errorMessage); // Show Error Toast ...
      },
    });
    return { data, pending, error, refresh };
  },
};

export default $api;
