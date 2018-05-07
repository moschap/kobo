import { applyFilterToSMS, processSMSData } from '../src/helpers/SMSHelpers';
import { Parser } from '../src/helpers/SMSParser';

it('matches regex with the correct message', () => {
    const p = /\+2348087616915/g;
    expect(p.test('+2348087616915')).toBeTruthy();
    expect(applyFilterToSMS('AMT: NGN19,500,500.00 CR')).toBeFalsy();
})
it('that the SMS parsers properly', () => {
    expect(Parser.Message.parse('The message')).toBeFalsy();
})

it('matches regex with the correct message 2', () => {
    const p = /\+2348087616915/g;
    expect(p.test('+2348087616915')).toBeFalsy();
})

/*it('aggregrates similar senderIDs together', () => {
    const data = [{"_id":46,"thread_id":656,"address":"+2348087616915","m_size":39,"person":0,"date":1524990069267,"date_sent":1524989949000,"protocol":0,"read":0,"status":-1,"type":1,"reply_path_present":0,"body":"Testing sms","service_center":"+2348020005056","locked":0,"sub_id":4,"error_code":0,"creator":"com.android.mms","seen":1,"ipmsg_id":0},{"_id":45,"thread_id":655,"address":"MTN VTU","m_size":76,"person":0,"date":1524671319054,"date_sent":1524671314000,"protocol":0,"read":1,"status":-1,"type":1,"reply_path_present":0,"body":"Ref: 1891643392\\r\\n25\\/04 16:48:34\\r\\nInvalid Tariff class","service_center":"+2348030008420","locked":0,"sub_id":4,"error_code":0,"creator":"com.android.mms","seen":1,"ipmsg_id":0},{"_id":44,"thread_id":639,"address":"131","m_size":63,"person":0,"date":1524424124451,"date_sent":1524424117000,"protocol":0,"read":1,"status":-1,"type":1,"reply_path_present":0,"body":"Y\'ello! Your mobile number is 2348068453356","service_center":"+2348030008420","locked":0,"sub_id":4,"error_code":0,"creator":"com.android.mms","seen":1,"ipmsg_id":0},{"_id":43,"thread_id":637,"address":"MTNN","m_size":137,"person":0,"date":1524391699855,"date_sent":1524391695000,"protocol":0,"read":1,"status":-1,"type":1,"reply_path_present":0,"body":"Yello! Do you know you can now open a  Bank account with ease using your mobile phone? Simply dial *710# to start or call 118.","service_center":"+2348030009420","locked":0,"sub_id":4,"error_code":0,"creator":"com.android.mms","seen":1,"ipmsg_id":0},{"_id":42,"thread_id":648,"address":"Taxify","m_size":60,"person":0,"date":1524336249291,"date_sent":1524336246000,"protocol":0,"read":1,"status":-1,"type":1,"reply_path_present":0,"body":"4122 is your Taxify activation code.","service_center":"+2348030008420","locked":0,"sub_id":4,"error_code":0,"creator":"com.android.mms","seen":1,"ipmsg_id":0},{"_id":41,"thread_id":647,"address":"Uber","m_size":61,"person":0,"date":1524336053093,"date_sent":1524336049000,"protocol":0,"read":1,"status":-1,"type":1,"reply_path_present":0,"body":" <# > Your Uber code is 1270 qlRnn4A1sbt","service_center":"+2348030008420","locked":0,"sub_id":4,"error_code":0,"creator":"com.android.mms","seen":1,"ipmsg_id":0},{"_id":40,"thread_id":647,"address":"Uber","m_size":61,"person":0,"date":1524335908468,"date_sent":1524335905000,"protocol":0,"read":1,"status":-1,"type":1,"reply_path_present":0,"body":" <# > Your Uber code is 1270 qlRnn4A1sbt","service_center":"+2348030008420","locked":0,"sub_id":4,"error_code":0,"creator":"com.android.mms","seen":1,"ipmsg_id":0},{"_id":39,"thread_id":647,"address":"Uber","m_size":60,"person":0,"date":1524335900377,"date_sent":1524335897000,"protocol":0,"read":1,"status":-1,"type":1,"reply_path_present":0,"body":" <# > Your Uber code: 1270 qlRnn4A1sbt","service_center":"+2348030008420","locked":0,"sub_id":4,"error_code":0,"creator":"com.android.mms","seen":1,"ipmsg_id":0},{"_id":38,"thread_id":647,"address":"Uber","m_size":62,"person":0,"date":1524335857325,"date_sent":1524335854000,"protocol":0,"read":1,"status":-1,"type":1,"reply_path_present":0,"body":" <# > 9909 is your Uber code. qlRnn4A1sbt","service_center":"+2348030008420","locked":0,"sub_id":4,"error_code":0,"creator":"com.android.mms","seen":1,"ipmsg_id":0},{"_id":37,"thread_id":647,"address":"Uber","m_size":55,"person":0,"date":1524335825163,"date_sent":1524335819000,"protocol":0,"read":1,"status":-1,"type":1,"reply_path_present":0,"body":" <# > Uber code: 9909 qlRnn4A1sbt","service_center":"+2348030008420","locked":0,"sub_id":4,"error_code":0,"creator":"com.android.mms","seen":1,"ipmsg_id":0}];

    const sample1 = /GTBank|Taxify|Uber|ZENITH/g;
    //const pp = JSON.parse(data);
    const pp1 = JSON.parse(data);
    const ppp = pp1.map(item => ({address: item.address, body: item.body})).filter(item => { console.log(item);return sample1.test(item.address)})
    console.log(ppp.length);
    //console.log(processSMSData(JSON.parse(data)));

})*/