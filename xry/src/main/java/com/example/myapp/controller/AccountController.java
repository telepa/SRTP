package com.example.myapp.controller;

import com.example.myapp.pojo.account;
import com.example.myapp.result.Result;
import com.example.myapp.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.microsoft.cognitiveservices.speech.*;
import com.microsoft.cognitiveservices.speech.audio.AudioConfig;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import javax.servlet.http.HttpServletRequest;

import java.util.List;

@Controller
public class AccountController {
    @Autowired
    AccountService accountService;
    //@RequestMapping("/initial")
    //public String initial(){
       //return "initial";
    //}
    //@RequestMapping("/login")
   // public String show(){
     //   return "login";}
    @CrossOrigin
    @PostMapping(value = "api/login")
    @ResponseBody
    public Result login(@RequestBody account Account){
        account myaccount=accountService.loginIn(Account.getUser_name(),Account.getPwd());
        int id = myaccount.getId();
        System.out.println(id);
        if(myaccount!=null){
            return new Result(400,id);
        }else return new Result(200, 00);
    }
    @RequestMapping(value="/Register",method =RequestMethod.POST)
    public String RegisterShow(){
        return "Register";
    }
    @CrossOrigin
    @PostMapping(value = "api/RegisterIn")
    @ResponseBody
    public String Resgister(@RequestBody account register){
        accountService.Register(register.getUser_name(),register.getPwd());
        return  "successR";
    }
}
