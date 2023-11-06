// 娉ㄥ叆鍏ㄥ眬鏂规硶 (浠呮敮鎸乼vbox鐨刯s1浠ュ強c#鐗坉rpy鐨刯s0锛屾殏涓嶆敮鎸乨rpy瀹樻柟py鐗堢殑js0)
// 娉ㄥ叆鍏ㄥ眬鏂规硶 (浠呮敮鎸乼vbox鐨刯s1浠ュ強c#鐗坉rpy鐨刯s0锛屾殏涓嶆敮鎸乨rpy瀹樻柟py鐗堢殑js0)
// 娉ㄥ叆鍏ㄥ眬鏂规硶 (浠呮敮鎸乼vbox鐨刯s1浠ュ強c#鐗坉rpy鐨刯s0锛屾殏涓嶆敮鎸乨rpy瀹樻柟py鐗堢殑js0)
globalThis.getHeaders= function(input){
    let t = new Date().getTime().toString();
	let headers = {
        'version_name': '1.0.6',
        'version_code': '6',
        'package_name': 'com.app.nanguatv',
        'sign': md5('c431ea542cee9679#uBFszdEM0oL0JRn@' + t).toUpperCase(),
        'imei': 'c431ea542cee9679',
        'timeMillis': t,
        'User-Agent': 'okhttp/4.6.0'
	};
	return headers
}
	
var rule = {
	title:'鐣呮ⅵ褰辫',
	host:'http://ys.changmengyun.com',
	homeUrl:'/api.php/provide/vod_rank?app=ylys&sort_type=month&imei=c431ea542cee9679&id=2&page=1',
    url:'/api.php/provide/vod_list?app=ylys&id=fyclassfyfilter&page=fypage&imei=c431ea542cee9679',
    detailUrl:'/api.php/provide/vod_detail?app=ylys&imei=c431ea542cee9679&id=fyid',
    searchUrl:'/api.php/provide/search_result_more?app=ylys&video_name=**&pageSize=20&tid=0&imei=c431ea542cee9679&page=fypage',
	searchable:2,
	quickSearch:0,
	filterable:1,
	filter_url:'&area={{fl.area}}&year={{fl.year}}&type={{fl.class}}&total={{fl.total or "鐘舵€�"}}&order={{fl.by or "鏂颁笂绾�"}}',
    filter:{
        "2":[{"key":"class","name":"绫诲瀷","value":[{"n":"鍏ㄩ儴","v":"绫诲瀷"},{"n":"鍥戒骇鍓�","v":"鍥戒骇鍓�"},{"n":"娓彴鍓�","v":"娓彴鍓�"}]},{"key":"area","name":"鍦板尯","value":[{"n":"鍏ㄩ儴","v":"鍦板尯"},{"n":"鍐呭湴","v":"鍐呭湴"},{"n":"棣欐腐鍦板尯","v":"棣欐腐鍦板尯"},{"n":"鍙版咕鍦板尯","v":"鍙版咕鍦板尯"}]},{"key":"year","name":"骞翠唤","value":[{"n":"鍏ㄩ儴","v":"骞翠唤"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10骞翠唬","v":"10骞翠唬"},{"n":"00骞翠唬","v":"00骞翠唬"},{"n":"90骞翠唬","v":"90骞翠唬"},{"n":"80骞翠唬","v":"80骞翠唬"}]},{"key":"by","name":"鎺掑簭","value":[{"n":"鐑挱姒�","v":"鐑挱姒�"},{"n":"濂借瘎姒�","v":"濂借瘎姒�"},{"n":"鏂颁笂绾�","v":"鏂颁笂绾�"}]}],
        "1":[{"key":"class","name":"绫诲瀷","value":[{"n":"鍏ㄩ儴","v":"绫诲瀷"},{"n":"鍔ㄤ綔鐗�","v":"鍔ㄤ綔鐗�"},{"n":"鍠滃墽鐗�","v":"鍠滃墽鐗�"},{"n":"鐖辨儏鐗�","v":"鐖辨儏鐗�"},{"n":"绉戝够鐗�","v":"绉戝够鐗�"},{"n":"鎭愭€栫墖","v":"鎭愭€栫墖"},{"n":"鍓ф儏鐗�","v":"鍓ф儏鐗�"},{"n":"鎴樹簤鐗�","v":"鎴樹簤鐗�"},{"n":"鎯婃倸鐗�","v":"鎯婃倸鐗�"}]},{"key":"area","name":"鍦板尯","value":[{"n":"鍏ㄩ儴","v":"鍦板尯"},{"n":"鍗庤","v":"鍗庤"},{"n":"棣欐腐鍦板尯","v":"棣欐腐鍦板尯"},{"n":"缇庡浗","v":"缇庡浗"},{"n":"娆ф床","v":"娆ф床"},{"n":"闊╁浗","v":"闊╁浗"},{"n":"鏃ユ湰","v":"鏃ユ湰"},{"n":"鍙版咕鍦板尯","v":"鍙版咕鍦板尯"},{"n":"娉板浗","v":"娉板浗"},{"n":"鍙版咕鍦板尯","v":"鍙版咕鍦板尯"},{"n":"鍗板害","v":"鍗板害"},{"n":"鍏跺畠","v":"鍏跺畠"}]},{"key":"year","name":"骞翠唤","value":[{"n":"鍏ㄩ儴","v":"骞翠唤"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10骞翠唬","v":"10骞翠唬"},{"n":"00骞翠唬","v":"00骞翠唬"},{"n":"90骞翠唬","v":"90骞翠唬"},{"n":"80骞翠唬","v":"80骞翠唬"}]},{"key":"by","name":"鎺掑簭","value":[{"n":"鐑挱姒�","v":"鐑挱姒�"},{"n":"濂借瘎姒�","v":"濂借瘎姒�"},{"n":"鏂颁笂绾�","v":"鏂颁笂绾�"}]}],
        "4":[{"key":"class","name":"绫诲瀷","value":[{"n":"鍏ㄩ儴","v":"绫诲瀷"},{"n":"鍥戒骇婕�","v":"鍥戒骇婕�"},{"n":"娆х編婕�","v":"娆х編婕�"},{"n":"鏃ラ煩婕�","v":"鏃ラ煩婕�"},{"n":"娓彴婕�","v":"娓彴婕�"}]},{"key":"area","name":"鍦板尯","value":[{"n":"鍏ㄩ儴","v":"鍦板尯"},{"n":"涓浗澶ч檰","v":"涓浗澶ч檰"},{"n":"鏃ユ湰","v":"鏃ユ湰"},{"n":"闊╁浗","v":"闊╁浗"},{"n":"娆х編","v":"娆х編"},{"n":"鍏跺畠","v":"鍏跺畠"}]},{"key":"year","name":"骞翠唤","value":[{"n":"鍏ㄩ儴","v":"骞翠唤"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10骞翠唬","v":"10骞翠唬"},{"n":"00骞翠唬","v":"00骞翠唬"},{"n":"90骞翠唬","v":"90骞翠唬"},{"n":"80骞翠唬","v":"80骞翠唬"}]},{"key":"by","name":"鎺掑簭","value":[{"n":"鐑挱姒�","v":"鐑挱姒�"},{"n":"鏂颁笂绾�","v":"鏂颁笂绾�"}]},{"key":"total","name":"鐘舵€�","value":[{"n":"鍏ㄩ儴","v":"鐘舵€�"},{"n":"杩炶浇","v":"杩炶浇"},{"n":"瀹岀粨","v":"瀹岀粨"}]}],
        "3":[{"key":"class","name":"绫诲瀷","value":[{"n":"鍏ㄩ儴","v":"绫诲瀷"},{"n":"澶ч檰","v":"澶ч檰"},{"n":"娓彴","v":"娓彴"},{"n":"鏃ラ煩","v":"鏃ラ煩"},{"n":"娆х編","v":"娆х編"}]},{"key":"area","name":"鍦板尯","value":[{"n":"鍏ㄩ儴","v":"鍦板尯"},{"n":"鍐呭湴","v":"鍐呭湴"},{"n":"娓彴","v":"娓彴"},{"n":"鏃ラ煩","v":"鏃ラ煩"},{"n":"娆х編","v":"娆х編"},{"n":"鍏跺畠","v":"鍏跺畠"}]},{"key":"year","name":"骞翠唤","value":[{"n":"鍏ㄩ儴","v":"骞翠唤"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10骞翠唬","v":"10骞翠唬"},{"n":"00骞翠唬","v":"00骞翠唬"},{"n":"90骞翠唬","v":"90骞翠唬"},{"n":"80骞翠唬","v":"80骞翠唬"}]},{"key":"by","name":"鎺掑簭","value":[{"n":"鐑挱姒�","v":"鐑挱姒�"},{"n":"鏂颁笂绾�","v":"鏂颁笂绾�"}]}],
        "46":[{"key":"class","name":"绫诲瀷","value":[{"n":"鍏ㄩ儴","v":"绫诲瀷"},{"n":"鏃ラ煩鍓�","v":"鏃ラ煩鍓�"},{"n":"娆х編鍓�","v":"娆х編鍓�"},{"n":"娴峰鍓�","v":"娴峰鍓�"}]},{"key":"area","name":"鍦板尯","value":[{"n":"鍏ㄩ儴","v":"鍦板尯"},{"n":"闊╁浗","v":"闊╁浗"},{"n":"缇庡墽","v":"缇庡墽"},{"n":"鏃ユ湰","v":"鏃ユ湰"},{"n":"娉板浗","v":"娉板浗"},{"n":"鑻卞浗","v":"鑻卞浗"},{"n":"鏂板姞鍧�","v":"鏂板姞鍧�"},{"n":"鍏朵粬","v":"鍏朵粬"}]},{"key":"year","name":"骞翠唤","value":[{"n":"鍏ㄩ儴","v":"骞翠唤"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10骞翠唬","v":"10骞翠唬"},{"n":"00骞翠唬","v":"00骞翠唬"},{"n":"90骞翠唬","v":"90骞翠唬"},{"n":"80骞翠唬","v":"80骞翠唬"}]},{"key":"by","name":"鎺掑簭","value":[{"n":"鐑挱姒�","v":"鐑挱姒�"},{"n":"濂借瘎姒�","v":"濂借瘎姒�"},{"n":"鏂颁笂绾�","v":"鏂颁笂绾�"}]}]
    },
	headers:{
		"User-Agent":"okhttp/4.6.0"
	},
	timeout:5000,
	class_name:'鐢佃鍓�&鐢靛奖&鍔ㄦ极&缁艰壓&娴峰绮鹃€�', // /api.php/provide/home_nav
	class_url:'2&1&4&3&46',
	limit:20,
	play_parse:true,
	lazy:`js:
        try {
            function getvideo(url) {
                let jData = JSON.parse(request(url, {
                    headers: getHeaders(url)
                }));
                if (jData.code == 1) {
                    return jData.data.url
                } else {
                    return 'http://43.154.104.152:1234/jhapi/cs.php?url=' + url.split('=')[1]
                }
            }
            if (/,/.test(input)) {
                let mjurl = input.split(',')[1]
                let videoUrl = getvideo(mjurl);
                input = {
                    jx: 0,
                    url: videoUrl,
                    parse: 0,
                    header: JSON.stringify({
                        'user-agent': 'Lavf/58.12.100'
                    })
                }
            } else {
                let videoUrl = getvideo(input);
                if (/jhapi/.test(videoUrl)) {
                    videoUrl = getvideo(videoUrl);
                    input = {
                        jx: 0,
                        url: videoUrl,
                        parse: 0,
                        header: JSON.stringify({
                            'user-agent': 'Lavf/58.12.100'
                        })
                    }
                } else {
                    input = {
                        jx: 0,
                        url: videoUrl,
                        parse: 0
                    }
                }
            }
        } catch (e) {
            log(e.toString())
        }
	`,
	鎺ㄨ崘:`js:
        var d = [];
        let html = request(input, {
            headers: getHeaders(input)
        });
        html = JSON.parse(html);
        html.forEach(function(it) {
            d.push({
                title: it.name,
                img: it.img,
                desc: it.remarks,
                url: it.id
            })
        });
        setResult(d);
    `,
	涓€绾�:`js:
		var d = [];
		let html = request(input, {
			headers: getHeaders(input)
		});
		html = JSON.parse(html);
		html.list.forEach(function(it) {
			d.push({
				title: it.name,
				img: it.img,
				desc: it.msg,
				url: it.id
			})
		});
		setResult(d);
	`,
	浜岀骇:`js:
        var d = [];
        VOD = {
            vod_id: input.split('id=')[1]
        };
        try {
            let html = request(input, {
                headers: getHeaders(input)
            });
            html = JSON.parse(html);
            let node = html.data;
            VOD = {
                vod_name: node['name'],
                vod_pic: node['img'],
                type_name: node['type'],
                vod_year: node['year'],
                vod_remarks: '鏇存柊鑷�: ' + node['msg'] + ' / 璇勫垎: ' + node['score'],
                vod_content: node['info'].strip()
            };
            let episodes = node.player_info;
            let playMap = {};
            if (typeof play_url === 'undefined') {
                var play_url = ''
            }
            episodes.forEach(function(ep) {
                let playurls = ep['video_info'];
                playurls.forEach(function(playurl) {
                    let source = ep['show'];
                    if (!playMap.hasOwnProperty(source)) {
                        playMap[source] = []
                    }
                    playMap[source].append(playurl['name'].strip() + '$' + play_url + urlencode(playurl['url']))
                })
            });
            let playFrom = [];
            let playList = [];
            Object.keys(playMap)
                .forEach(function(key) {
                    playFrom.append(key);
                    playList.append(playMap[key].join('#'))
                });
            let vod_play_from = playFrom.join('$$$');
            let vod_play_url = playList.join('$$$');
            VOD['vod_play_from'] = vod_play_from;
            VOD['vod_play_url'] = vod_play_url
        } catch (e) {
            log('鑾峰彇浜岀骇璇︽儏椤靛彂鐢熼敊璇�:' + e.message)
        }
	`,
	鎼滅储:`js:
        var d = [];
        let html = request(input, {
            headers: getHeaders(input)
        });
        html = JSON.parse(html);
        html.data.forEach(function(it) {
            d.push({
                title: it.video_name,
                img: it.img,
                desc: it.qingxidu + '/' + it.category,
                url: it.id,
                content: it.blurb
            })
        });
        setResult(d);
    `,
}var rule={title:'JRKAN直播',host:'http://m.jrkan2023.com',url:'/fyclass',searchUrl:'',searchable:0,quickSearch:0,class_name:'全部',class_url:'/',headers:{'User-Agent':'MOBILE_UA'},timeout:5000,play_parse:true,lazy:'',limit:6,double:false,推荐:'*',一级:'.loc_match:eq(2) ul;li:gt(1):lt(4)&&Text;img&&src;li:lt(2)&&Text;a:eq(1)&&href',二级:{title:'.sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text',img:'img&&src',desc:';;;.lab_team_home&&Text;.lab_team_away&&Text',content:'.sub_list ul&&Text',tabs:'',tab_text:'',lists:'.sub_channel a',list_text:'a&&Text',list_url:'a&&data-play'},搜索:'',}