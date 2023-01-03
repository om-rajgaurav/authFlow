let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
export const Utility = {
  email_validation: email => {
    return reg.test(email);
  },
};
