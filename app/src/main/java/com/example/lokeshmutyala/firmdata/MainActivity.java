package com.example.lokeshmutyala.firmdata;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.RadioGroup;

public class MainActivity extends AppCompatActivity {

    WebView webView;
    //RadioGroup format;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        webView=(WebView)findViewById(R.id.web);
        WebSettings webSettings=webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setLoadWithOverviewMode(true);
        webSettings.setUseWideViewPort(true);
        webSettings.setBuiltInZoomControls(true);
        webSettings.setDisplayZoomControls(false);
        webSettings.setSupportZoom(true);
        webSettings.setAllowContentAccess(true);
        webSettings.setGeolocationEnabled(true);
        webSettings.setDefaultTextEncodingName("utf-8");
    webView.getSettings().setPluginState(WebSettings.PluginState.ON);
        webView.loadUrl("file:///android_asset/www/registration.html");
        //format=(RadioGroup)findViewById(R.id.Format);
    }
}
