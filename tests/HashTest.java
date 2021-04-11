package com.company;

import java.lang.Math;
import java.io.FileWriter;
import java.util.Scanner;
import java.util.Hashtable;

public class Main {
    static int tries = 1000;
    public static void main(String[] args) {
        try {
            double[] times = new double[11];
            double trash;
            FileWriter w;
            Scanner s = new Scanner(System.in);
            System.out.println("Which test?");

            int num = Integer.parseInt(s.nextLine());

            switch (num) {
                case 1:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = hashAccess(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = hashAccess(i * 10000);
                    }
                    w = new FileWriter("hashAccess.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 2:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = hashSearch(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = hashSearch(i * 10000);
                    }
                    w = new FileWriter("hashSearch.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 3:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = hashInsert(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = hashInsert(i * 10000);
                    }
                    w = new FileWriter("hashInsert.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 4:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = hashDelete(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = hashDelete(i * 10000);
                    }
                    w = new FileWriter("hashDelete.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;
                default:
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static double hashAccess(int size){
        if(size == 0)
            return 0;
        Hashtable<String, Integer> h = new Hashtable();
        int target = (int) Math.floor(size/2);
        String t = "var" + target;
        double sum = 0;
        String k;
        for(int i = 1; i <= size; i++) {
            k = "var" + i;
            h.put(k,i);
        }
        int temp;
        for(int j = 0; j < tries; j++){
            double start = System.nanoTime();
            temp = h.get(t);
            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }

    public static double hashSearch(int size){
        if(size == 0)
            return 0;
        Hashtable<String, Integer> h = new Hashtable();
        int target = (int) Math.floor(size/2);
        String t = "var" + target;
        double sum = 0;
        String k;

        for(int i = 1; i <= size; i++) {
            k = "var" + i;
            h.put(k,i);
        }
        boolean temp;

        for(int j = 0; j < tries; j++){
            double start = System.nanoTime();
            temp = h.containsKey(t);
            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }

    public static double hashInsert(int size){
        if(size == 0)
            return 0;
        double sum = 0;
        Hashtable<String, Integer> h = new Hashtable();
        String k;
        for(int i = 1; i <= size; i++) {
            k = "var" + i;
            h.put(k,i);
        }
        String t = "var" + (size + 1);

        for(int j = 0; j < tries; j++){
            double start = System.nanoTime();
            h.put(t,size+1);
            sum += System.nanoTime() - start;
            h.remove(t,size+1);
        }

        return sum/(tries * 1000);
    }

    public static double hashDelete(int size){
        if(size == 0)
            return 0;
        double sum = 0;
        Hashtable<String, Integer> h = new Hashtable();
        String k;
        for(int i = 1; i <= size; i++) {
            k = "var" + i;
            h.put(k,i);
        }

        for(int j = 0; j < tries; j++){
            double start = System.nanoTime();
            h.remove("var1",1);
            sum += System.nanoTime() - start;
            h.put("var1",1);
        }

        return sum/(tries * 1000);
    }
}
