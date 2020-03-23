

export default {
  login() {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve({ 
            user: { name: "Andrii"}, 
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
