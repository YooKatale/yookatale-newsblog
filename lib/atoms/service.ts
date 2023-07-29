import axios from "./http";

class Service {
  /**
   *@author Golgotha Aksanti
   * @param {*} err
   * @returns
   */
  static handleError = (err: any) => {
    if (!err.response) {
      return {
        error: "It seems you are offline. Try to check your Internet",
      };
    }

    const { data } = err.response;
    const { error, message, status } = data;

    if (message) {
      return { data: null, error: message, status };
    }

    if (typeof error !== "string") {
      return { data: null, errors: "Unknown error", status };
    }
    return { data: null, error, status };
  };

  /**
   * @author Golgotha Aksanti
   * @param {*} response
   * @returns
   */
  static resolveResponse = (response: any) => {
    const { data, error, message, status } = response.data;

    return {
      data,
      message,
      error: !data ? message : error,
      status,
    };
  };

  /**
   * @author Golgotha Aksanti
   * @param {*} response
   * @returns
   */
  static requestHeaders = (token: string): any | null => {
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  /**
   * @author Golgotha Aksanti
   * @param {*} url
   * @returns
   */
  static async get(url: string, token?: string) {
    return await axios
      .get(url, token ? this.requestHeaders(token) : null)
      .then(this.resolveResponse)
      .catch(this.handleError);
  }

  static async post(url: string, data: any, token: string) {
    return await axios
      .post(url, data, token ? this.requestHeaders(token) : null)
      .then(this.resolveResponse)
      .catch(this.handleError);
  }

  static async put(url: string, data: any, token: string) {
    return await axios
      .put(url, data, token ? this.requestHeaders(token) : null)
      .then(this.resolveResponse)
      .catch(this.handleError);
  }

  static async delete(url: string, data: any, token: string) {
    return await axios
      .delete(url, token ? this.requestHeaders(token) : null)
      .then(this.resolveResponse)
      .catch(this.handleError);
  }
}

export default Service;
