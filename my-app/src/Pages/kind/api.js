import axios from 'axios';

const getMealData =(page)=>{
    return axios(`https://www.kindmeal.my/resources/kindmeal_mobile_api-v2.8.php?action=deal_list`,{
        params:{
            page:page,
        }
    } )
}


const getMoments =(page)=>{
    return axios(`https://www.kindmeal.my/resources/kindmeal_mobile_api-v2.7.php?action=moment_list`,{
        params:{
            page:page,
        }
    } )
}
export {getMealData,getMoments};