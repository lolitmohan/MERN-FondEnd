class ValidetionHelper{
    static isLogin(){
        let token=sessionStorage.getItem('token')
        return token !== null;
        // return true
    }

    static isEmpty(value){
        return value.length==0;
    }
    static Unauthorized(code){
        if(code===401){
            sessionStorage.clear();
            window.location.href="/login"
        }
    }

    static tokenHeader(){
        return {
            headers:{
                'token': sessionStorage.getItem('token')
            }
        }
    }

    static ApiBase="https://cart-api.teamrabbil.com/api"
}

export default ValidetionHelper;
