class ValidetionHelper{
    static isLogin(){
        let token= sessionStorage.getItem('token');
        if(token==null){
            return false;
        }else{
            return true;
        }
    }

    static BaseUrl="https://cart-api.teamrabbil.com/api";

    static isEmpty(value){
        return value.length==0;  
    }

    static tokenHeader(){
        return{
            headers:{
                'token': sessionStorage.getItem('token')
            }
        }
    }

    static Unauthorized(code){
        if(code==401){
            sessionStorage.clear();
            window.location.href='/login'
        }
    }


}
export default ValidetionHelper;