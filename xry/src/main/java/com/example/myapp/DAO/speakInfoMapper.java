package com.example.myapp.DAO;

import org.apache.ibatis.annotations.Mapper;
import com.example.myapp.pojo.follow_up_info;
import org.springframework.stereotype.Component;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface speakInfoMapper {
    String getContent();
    void setContent(String content);
}
