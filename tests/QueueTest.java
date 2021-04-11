package com.company;

import java.lang.Math;
import java.io.FileWriter;
import java.util.Scanner;
import java.util.Queue;
import java.util.LinkedList;

public class QueueTest {
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
                        times[i] = queueAccess(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = queueAccess(i * 10000);
                    }
                    w = new FileWriter("queueAccess.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 2:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = queueSearch(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = queueSearch(i * 10000);
                    }
                    w = new FileWriter("queueSearch.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 3:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = queueFInsert(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = queueFInsert(i * 10000);
                    }
                    w = new FileWriter("queueFInsert.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 4:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = queueEInsert(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = queueEInsert(i * 10000);
                    }
                    w = new FileWriter("queueEInsert.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 5:
                    /*for(int i = 0; i < times.length; i++) {
                        times[i] = queueFDelete(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = queueFDelete(i * 10000);
                    }*/
                    queueFDelete(10);
                    times[0] = queueFDelete(0);
                    times[1] = queueFDelete(10000);
                    times[2] = queueFDelete(20000);
                    times[3] = queueFDelete(30000);
                    times[4] = queueFDelete(40000);
                    times[5] = queueFDelete(50000);
                    times[6] = queueFDelete(60000);
                    times[7] = queueFDelete(70000);
                    times[8] = queueFDelete(80000);
                    times[9] = queueFDelete(90000);
                    times[10] = queueFDelete(100000);

                    w = new FileWriter("queueFDelete.txt");
                    for(int j = 0; j < times.length; j++)
                        w.write(String.valueOf(times[j]) + System.getProperty( "line.separator" ));
                    w.close();
                    break;

                case 6:
                    for(int i = 0; i < times.length; i++) {
                        times[i] = queueEDelete(i * 10000);
                        if(i == 1 || i == times.length - 1)
                            times[i] = queueEDelete(i * 10000);
                        while(i > 0 && times[i] < times[i-1])
                            i-=2;
                    }
                    w = new FileWriter("queueEDelete.txt");
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

    public static double queueAccess(int size){
        if(size == 0)
            return 0;
        Queue<Integer> q = new LinkedList<>();
        for(int i = 1; i <= size; i++)
            q.add(i);

        int target = (int)Math.floor(q.size()/2);
        double sum = 0;
        int temp;

        for(int j = 0; j < tries; j++) {
            double start = System.nanoTime();
            for(int k = 0; k < size; k++){
                if(k == target)
                    temp = q.peek();
                q.add(q.remove());
            }
            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }

    public static double queueSearch(int size){
        if(size == 0)
            return 0;
        Queue<Integer> q = new LinkedList<>();
        for(int i = 1; i <= size; i++)
            q.add(i);

        int target = (int)Math.floor(q.size()/2);
        double sum = 0;
        int temp;

        for(int j = 0; j < tries; j++) {
            double start = System.nanoTime();
            for(int k = 0; k < size; k++) {
                if (q.peek() == target)
                    temp = k;
                q.add(q.remove());
            }
            sum += System.nanoTime() - start;
        }
        return sum/(tries * 1000);
    }

    public static double queueFInsert(int size){
        if(size == 0)
            return 0;

        double sum = 0;

        for(int i = 0; i < tries; i++){
            Queue<Integer> q = new LinkedList<>();
            for(int j = 1; j <= size; j++)
                q.add(j);
            double start = System.nanoTime();
            q.add(0);
            for(int k = 0; k < size; k++)
                q.add(q.remove());
            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }

    public static double queueEInsert(int size){
        if(size == 0)
            return 0;

        double sum = 0;

        for(int i = 0; i < tries; i++){
            Queue<Integer> q = new LinkedList<>();
            for(int j = 1; j <= size; j++)
                q.add(j);
            double start = System.nanoTime();
            q.add(0);
            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }

    public static double queueFDelete(int size){
        if(size == 0)
            return 0;

        double sum = 0;

        for(int i = 0; i < tries; i++){
            Queue<Integer> q = new LinkedList<>();
            for(int j = 1; j <= size; j++)
                q.add(j);
            double start = System.nanoTime();
            q.remove();
            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }

    public static double queueEDelete(int size){
        if(size == 0)
            return 0;

        double sum = 0;

        for(int i = 0; i < tries; i++){
            Queue<Integer> q = new LinkedList<>();
            for(int j = 1; j <= size; j++)
                q.add(j);
            double start = System.nanoTime();
            for(int k = 0; k < size-1; k++)
                q.add(q.remove());
            q.remove();

            sum += System.nanoTime() - start;
        }

        return sum/(tries * 1000);
    }
}
