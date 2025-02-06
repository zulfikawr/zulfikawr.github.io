import { createAPI } from 'nextkit';

export const api = createAPI({
  async onError(_req, _res, error) {
    console.warn(error);

    return {
      status: 500,
      message: error.message,
    };
  },

  async getContext() {
    return {};
  },
});
