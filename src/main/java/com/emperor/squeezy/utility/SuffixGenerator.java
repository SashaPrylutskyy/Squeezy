package com.emperor.squeezy.utility;

import java.util.Random;

public class SuffixGenerator {
    final private static int length = 10;
    final private static String[] params = {
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "abcdefghijklmnopqrstuvwxyz",
            "0123456789"
    };

    public static String generate() {
        StringBuilder suffix = new StringBuilder();
        Random random = new Random();

        for (int i = 0; i < length; i++) {
            int seq_id = random.nextInt(params.length);
            String sequence = params[seq_id];

            int el_id = random.nextInt(sequence.length());
            char el = sequence.charAt(el_id);
            suffix.append(el);
        }
        return suffix.toString();
    }
}
