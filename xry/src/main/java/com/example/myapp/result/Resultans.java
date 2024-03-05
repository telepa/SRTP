package com.example.myapp.result;

public class Resultans {
    private String ans;
    private int sco;
    public Resultans(String ans,int sco) {
        this.ans = ans;
        this.sco = sco;
    }

    public String getAns() {
        return ans;
    }
    public int getSco() {return sco;}

    public void setSco(int sco) {
        this.sco = sco;
    }

    public void setAns(String ans) {
        this.ans = ans;
    }
}
