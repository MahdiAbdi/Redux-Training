export const selectUser = (user) => {
    console.log("You Clicked On User: ", user.firstName);
    return{
        type: "USER_SELECTED",
        payload: user
    }
};