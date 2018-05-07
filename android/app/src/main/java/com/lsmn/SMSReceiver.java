package com.lsmn;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import com.lsmn.SMSService;
import com.facebook.react.HeadlessJsTaskService;

public final class SMSReceiver extends BroadcastReceiver {
    public final void onReceive(Context context, Intent intent) {
        Intent recIntent = new Intent(context, SMSService.class);
        if (intent.getAction().equals("android.intent.action.SMS_RECEIVED_ACTION")) {
            recIntent.putExtra("action", "sms_received_action");
        }
        context.startService(recIntent);
        HeadlessJsTaskService.acquireWakeLockNow(context);
    }
}