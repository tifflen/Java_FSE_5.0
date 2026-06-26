package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {

        System.out.println("Java Application Started");

        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

    }
}
