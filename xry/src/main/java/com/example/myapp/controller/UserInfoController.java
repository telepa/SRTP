package com.example.myapp.controller;

import com.example.myapp.pojo.follow_up_info;
import com.example.myapp.pojo.user_info;
import com.example.myapp.service.UserInfoService;
import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.example.myapp.service.FollowUpInfoService;
import com.example.myapp.service.UserInfoService;
import org.apache.ibatis.jdbc.Null;


import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
@RestController
public class UserInfoController {
    @Autowired
    UserInfoService userInfoService;
    @Autowired
    FollowUpInfoService followUpInfoService;
    @CrossOrigin
    @RequestMapping(value="api/getUserInfo",method= RequestMethod.POST)
    @ResponseBody
    public user_info getUserInfo(@RequestBody user_info user_id){
        if(userInfoService.getInfo(user_id.getId())==null){
            userInfoService.setNewUserInfo(user_id.getId());
        }
        return userInfoService.getInfo(user_id.getId());
    }
    @RequestMapping(value="api/setName",method= RequestMethod.POST)
    @ResponseBody
    public void setName(@RequestBody user_info user_name){
        if(userInfoService.getInfo(user_name.getId())==null){
            userInfoService.setNewUserInfo(user_name.getId());
        }
        userInfoService.setName(user_name.getId(),user_name.getName());
    }
    @RequestMapping(value="api/setGender",method= RequestMethod.POST)
    @ResponseBody
    public void setGender(@RequestBody user_info user_gender){
        if(userInfoService.getInfo(user_gender.getId())==null){
            userInfoService.setNewUserInfo(user_gender.getId());
        }
        userInfoService.setGender(user_gender.getId(),user_gender.getGender());
    }
    @RequestMapping(value="api/setBirth" ,method= RequestMethod.POST)
    @ResponseBody
    public void setBirth(@RequestBody user_info user_birth){
        if(userInfoService.getInfo(user_birth.getId())==null){
            userInfoService.setNewUserInfo(user_birth.getId());
        }
        userInfoService.setBirth(user_birth.getId(),user_birth.getBirth());
    }
    @RequestMapping(value="api/setTele",method= RequestMethod.POST)
    @ResponseBody
    public void setTele(@RequestBody user_info user_tele){
        if(userInfoService.getInfo(user_tele.getId())==null){
            userInfoService.setNewUserInfo(user_tele.getId());
        }
        userInfoService.setTele(user_tele.getId(),user_tele.getTele());
    }
    @RequestMapping(value="api/setSurgeryOrNot",method= RequestMethod.POST)
    @ResponseBody
    public void setSurgeryOrNot(@RequestBody user_info user_SurgeryOrNot){
        if(userInfoService.getInfo(user_SurgeryOrNot.getId())==null){
            userInfoService.setNewUserInfo(user_SurgeryOrNot.getId());
        }
        userInfoService.setSurgeryOrNot(user_SurgeryOrNot.getId(),user_SurgeryOrNot.getSurgery_or_not());
    }
    @RequestMapping(value="api/setSurgeryDate",method= RequestMethod.POST)
    @ResponseBody
    public void setSurgeryDate(@RequestBody user_info user_SurgeryDate){
        if(userInfoService.getInfo(user_SurgeryDate.getId())==null){
            userInfoService.setNewUserInfo(user_SurgeryDate.getId());
        }
        userInfoService.setSurgeryDate(user_SurgeryDate.getId(),user_SurgeryDate.getSurgery_date());
    }
    @RequestMapping(value="api/setLanguage",method= RequestMethod.POST)
    @ResponseBody
    public void setLanguage(@RequestBody user_info user_Language){
        if(userInfoService.getInfo(user_Language.getId())==null){
            userInfoService.setNewUserInfo(user_Language.getId());
        }
        userInfoService.setLanguage(user_Language.getId(),user_Language.getLanguage());
    }
    @RequestMapping(value="api/getLastDate",method= RequestMethod.POST)
    @ResponseBody
    public java.sql.Date getLastDate(@RequestBody user_info user_LastDate) throws ParseException {
        java.sql.Date today = user_LastDate.getSurgery_date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        //设置能查询的最早日期
        Date d1 = new Date(sdf.parse("2023-09-01").getTime());
        //在范围内逐天进行查询
        int flag=0;
        while(d1.before(today)){
            today=getPreDoneScore(today);
            //统计当天答题条数
            int tmp=followUpInfoService.getLines(user_LastDate.getId(),today);
            if(tmp==37){//若全部都答，则跳出循环返回该日期
                flag=1;
                break;
            }
        }
        if(flag==1)return today;
        else return null;
    }
    //Date是java.sql.Date类型
    //返回该日期的前一天日期
    protected java.sql.Date getPreDoneScore(Date holdDate) {
        Calendar calendar =new GregorianCalendar();
        calendar.setTime(holdDate);
        calendar.add(calendar.DATE, -7);
        // calendar的time转成java.util.Date格式日期
        java.util.Date utilDate = (java.util.Date)calendar.getTime();
        calendar.add(calendar.DATE, 6);
        utilDate = (java.util.Date)calendar.getTime();
        //java.util.Date日期转换成转成java.sql.Date格式
        Date newDate =new Date(utilDate.getTime());
        return newDate;
    }
}
