package come.myapplication;

import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;


public class MyActivity extends ActionBarActivity implements View.OnClickListener {
	// HASH
	private Button button1;
	private TextView textView1;

	// INVERSE
	private Button button2;
	private TextView textView2;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_my);

		textView1 = (TextView) findViewById(R.id.textview1);
		button1 = (Button) findViewById(R.id.button1);
		button1.setOnClickListener(this);

		textView2 = (TextView) findViewById(R.id.textview2);
		button2 = (Button) findViewById(R.id.button2);
		button2.setOnClickListener(this);
	}

	public long hash(String mot) {
		long valeur_final = 7L;
		String letters = "acdegilmnoprstuw";
		for (int i = 0; i < mot.length(); i++) {
			valeur_final = (valeur_final * 37 + letters.indexOf(mot.charAt(i)));
		}
		return valeur_final;
	}

	public long hash2(String mot) {
		String letters = "acdegilmnoprstuw";
		long h;
		long valeur_final = 7L;

		for (int i = 0; i < mot.length(); i++) {
			long index = letters.indexOf(mot.charAt(i));

			h = valeur_final * 37;
			valeur_final = h + index;
		}
		return valeur_final;
	}

	public static final int MOT_LENGHT = 7;//longueur du mot = 8 so

	public String unhash(long valeur_final) {
		String letters = "acdegilmnoprstuw";
		long h = 7L;
		long numero;
		String mot = "";

		for (int i = MOT_LENGHT; i >= 0; i--) {
			numero = (long) (valeur_final / Math.pow(37, i));
			Log.i("", "numero2 = " + numero);

			h = h * 37;
			Log.i("", "h before = " + h);

			int index = (int) (numero - h);
			mot = mot + letters.charAt(index);
			Log.i("", "index = " + index);

			h = (long) (valeur_final / Math.pow(37, i));
			Log.i("", "h after = " + h);
		}
		return mot;
	}

/*
def unhash(n):
    letters = "acdegilmnoprstuw"
    h = 7
    result = []
    for i in sorted(range(0, 8), reverse=True):
        result.append(letters[n / (37**i) - h * 37])
        h = n / (37**i)

    return ''.join(result)

print(unhash(25180466553932))
*/

	@Override
	public void onClick(View v) {
		int vi = v.getId();
		switch (vi) {
			case R.id.button1:
				textView1.setText(hash2("leepadg") + "");
				break;
			case R.id.button2:
				textView2.setText(unhash(25180466553932L) + "");
				break;
		}
	}
}
