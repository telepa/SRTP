package com.example.myapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.example.myapp.pojo.user_info;
import com.example.myapp.service.UserInfoService;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;
//get files end

//get Speak package
import com.microsoft.cognitiveservices.speech.*;
import com.microsoft.cognitiveservices.speech.audio.AudioConfig;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
//get end

@RestController
public class getfiles {
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
    @PostMapping("/upload")
    public String upload(@RequestParam("file") MultipartFile multipartfile, HttpServletRequest request){
        String realPath = request.getSession().getServletContext().getRealPath("/update/");
        String format=sdf.format(new Date());
        String  id= "";
        id= request.getParameter("id");
        int realid = Integer.parseInt(id);
        File folder=new File(realPath+format);
        if(!folder.isDirectory()){
            folder.mkdirs();
        }
        String oldname = multipartfile.getOriginalFilename();
        String newname = UUID.randomUUID().toString()+oldname.substring(oldname.lastIndexOf("."),oldname.length());
        try {
            multipartfile.transferTo(new File(folder, newname));
            String truePath=new File(folder, newname).getAbsolutePath();
            System.out.println(truePath);//输出（上传文件）保存的绝对路径
            String filePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+"/update/"+format+newname;
            return SpeakTT(truePath,realid);
        }
        catch (IOException e){
            e.printStackTrace();
        } catch (ExecutionException e) {
            throw new RuntimeException(e);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return "上传失败!";
    }
    @Autowired
    UserInfoService userInfoService;
    public String SpeakTT(String path,int id) throws ExecutionException, InterruptedException {
        SpeechConfig speechConfig = SpeechConfig.fromSubscription("18021b5f94a04dcbaff51d60071225e5", "eastus");
        //get用户选择的方言识别，如果没有，则默认选择中文普通话
        System.out.println(id);
        user_info tmp=userInfoService.getInfo(id);
        if(userInfoService.getInfo(id)==null){
            userInfoService.setNewUserInfo(id);
            userInfoService.setLanguage(id,"zh-CN");
        }
        if(tmp.getLanguage()==null) userInfoService.setLanguage(tmp.getId(), "zh-CN");
        System.out.println(userInfoService.getInfo(id));
        System.out.println(tmp.getLanguage());
        speechConfig.setSpeechRecognitionLanguage(tmp.getLanguage());
        //设置语音识别语言结束
        AudioConfig audioConfig = AudioConfig.fromWavFileInput(path);
        SpeechRecognizer speechRecognizer = new SpeechRecognizer(speechConfig, audioConfig);
        Future<SpeechRecognitionResult> task = speechRecognizer.recognizeOnceAsync();
        SpeechRecognitionResult result = task.get();
        System.out.println("RECOGNIZED: Text=" + result.getText());
        return result.getText();
    }
}
