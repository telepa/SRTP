package com.example.myapp.controller;

import com.example.myapp.pojo.account;
import com.example.myapp.result.Resultans;
import com.example.myapp.pojo.follow_up_info;
import com.example.myapp.service.FollowUpInfoService;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.microsoft.cognitiveservices.speech.*;
import com.microsoft.cognitiveservices.speech.audio.AudioConfig;
import org.springframework.stereotype.Component;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

@Controller
public class FollowUpInfoController {
    @Autowired
    FollowUpInfoService followUpInfoService;
    @CrossOrigin
    @PostMapping(value = "api/FollowSearch")
    @ResponseBody
    public Resultans show(@RequestBody follow_up_info searchans){
        follow_up_info searchres = followUpInfoService.getRecord(searchans.getF_id(), searchans.getId(), searchans.getF_date());
        String ans = searchres.getAns();
        int sco = searchres.getScore();
        if(searchres!=null){
            return new Resultans(ans,sco);
        }else return new Resultans("error",0);

        }

    @RequestMapping(value="/FollowSearchWin",method = RequestMethod.POST)
    public String showSearch(String f_id,int id,java.sql.Date f_date){
        follow_up_info mySearch= followUpInfoService.getRecord(f_id,id,f_date);
        if(mySearch!=null){
            return "SearchWin";
        }else return "SearchError";
    }
    @CrossOrigin
    @PostMapping(value = "api/InsertRecords")
    @ResponseBody
    public String InsertingAns(@RequestBody follow_up_info myfollow_up_info){
        followUpInfoService.InsertRecord(myfollow_up_info.getF_id(), myfollow_up_info.getId(), myfollow_up_info.getClassify(), myfollow_up_info.getF_date(), myfollow_up_info.getQuestion(), myfollow_up_info.getAns(), myfollow_up_info.getScore());
        return "InsertSuccess";
    }
    @CrossOrigin
    @PostMapping(value = "api/Restart")
    @ResponseBody
    public String DeleteRecords(@RequestBody follow_up_info restart){
        followUpInfoService.DeleteRecords(restart.getId(), restart.getF_date());
        return "DeleteSuccess";
    }
    @CrossOrigin
    @PostMapping(value = "api/SpeakInsertRecords")
    @ResponseBody
    public Resultans Speak(@RequestBody follow_up_info speakfollow_up_info) throws ExecutionException, InterruptedException {
        SpeechConfig speechConfig = SpeechConfig.fromSubscription("18021b5f94a04dcbaff51d60071225e5", "eastus");
        speechConfig.setSpeechRecognitionLanguage("zh-cn");
        AudioConfig audioConfig = AudioConfig.fromDefaultMicrophoneInput();
        SpeechRecognizer speechRecognizer = new SpeechRecognizer(speechConfig, audioConfig);
        System.out.println(speakfollow_up_info.getId());
        System.out.println("Speak into your microphone.");
        Future<SpeechRecognitionResult> task = speechRecognizer.recognizeOnceAsync();
        SpeechRecognitionResult result = task.get();
        System.out.println("RECOGNIZED: Text=" + result.getText());

        String ans = result.getText();
        String ans1 = "一点也不。";
        String ans2 = "有一点。";
        String ans3 = "有些。";
        String ans4 = "相当。";
        String ans5 = "非常。";
        int sco=0;
        if(ans.equals(ans1)) {sco = 0; ans = "一点也不";}
        else if(ans.equals(ans2)) {sco=1; ans = "有一点";}
        else if(ans.equals((ans3))) {sco=2;ans = "有些";}
        else if(ans.equals(ans4)) {sco=3;ans = "相当";}
        else if(ans.equals(ans5)) {sco=4;ans = "非常";}
        System.out.println(speakfollow_up_info.getF_id());
        System.out.println(speakfollow_up_info.getId());
        System.out.println(speakfollow_up_info.getClassify());
        System.out.println(speakfollow_up_info.getF_date());
        System.out.println(speakfollow_up_info.getQuestion());
        System.out.println(ans);
        System.out.println(sco);
        followUpInfoService.InsertRecord(speakfollow_up_info.getF_id(), speakfollow_up_info.getId(), speakfollow_up_info.getClassify(), speakfollow_up_info.getF_date(), speakfollow_up_info.getQuestion(),ans , sco);
        return new Resultans(ans,sco);
    }
}

