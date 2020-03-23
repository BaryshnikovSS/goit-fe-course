

export default {
  login(data) {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve({ 
            user: data, 
            token: "afsdfsakjfhla"  });
      }, 300)
    );
  },

  loginErr() {
    return new Promise(reject =>
      setTimeout(() => reject({ error: "Servr problem" }), 300)
    );
  }
};
