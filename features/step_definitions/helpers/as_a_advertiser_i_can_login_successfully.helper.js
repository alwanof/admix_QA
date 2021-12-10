module.exports = {
    catchLogic:function(username,pass){
        let logic='InvPassword';
        if(username=='mohammed.murad@admixplay.com' && pass=='Zoom+9321'){
            logic='Authorized';
        }
        
        if(username=='mohammed.murad@admixplay.com' && pass=='zoom94'){
            logic='ShortPassword';
        }
        if(username=='medo199.com'  && pass=='Zoom+9321'){
            logic='InvEmail';
        }
        return logic;
    }
};