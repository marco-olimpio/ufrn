package com.ufrn.android01class;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class Main2Activity extends AppCompatActivity {
    private String counter;
    private Button btnAcao;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        Intent intent = getIntent();

        Bundle params = intent.getExtras();
        counter = params.getString("texto");
        int addedCounter = Integer.parseInt(counter) + 1;

        btnAcao = findViewById(R.id.btnNext);
        btnAcao.setText("");
        btnAcao.setText(Integer.toString(addedCounter));

        String recebido = "Número recebido foi " + counter;
        Toast.makeText(this, recebido, Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onBackPressed(){
        Intent intent = new Intent();

        intent.putExtra("mensagem", btnAcao.getText().toString());
        setResult(RESULT_OK, intent);
        finish();
    }

    public void next(View view) {
        onBackPressed();
    }
}
