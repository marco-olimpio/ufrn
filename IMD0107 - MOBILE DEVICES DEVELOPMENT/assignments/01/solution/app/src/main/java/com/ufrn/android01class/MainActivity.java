package com.ufrn.android01class;

import android.content.Intent;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;


public class MainActivity extends AppCompatActivity {

    private Button btnAcao;
    private static final String TAG = "MyActivity";

    @Override
    public void onStart() {
        super.onStart();
        Log.i(TAG, "MainActivity - START");
    }

    @Override
    public void onStop() {
        super.onStop();
        Log.i(TAG, "MainActivity - STOP");
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Log.i(TAG, "MainActivity - CREATE");
    }

    protected void next(View view){
        Intent intent = new Intent(this, Main2Activity.class);
        btnAcao = findViewById(R.id.btnNext);
        String counterValue = btnAcao.getText().toString();
        int addedCounter = Integer.parseInt(counterValue);
        intent.putExtra("texto", Integer.toString(addedCounter));
        startActivityForResult(intent, 5);
    }

    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data){
        super.onActivityResult(requestCode, resultCode, data);

        if(requestCode == 5 && resultCode == RESULT_OK){

            String message = data.getStringExtra("mensagem");
            Toast.makeText(this, message, Toast.LENGTH_SHORT).show();

            int value = Integer.parseInt(message) + 1;

            btnAcao.setText(Integer.toString(value));

        }
    }
}
