import React from "react";
import Qna from "../Qna/Qna";

const Footer = () => {
  return (
    <footer className='bg-dark p-8 text-white'>
      <h2 className='text-center text-4xl mb-8'>Questions and Answers</h2>
      <Qna
        question='How react works?'
        answer='React হলো একটি Javascript লাইব্রেরী যার মাধ্যমে declarative code
        ব্যবহারের মাধ্যমে UI তৈরী করা হয়। রিয়েক্টে প্রত্যেকটা এলিমেন্ট তার ভিতরে
        কি আছে সেটা ডিক্লেয়ার করে। declarative code দ্বারা কন্টেন্ট কি হবে সেটা
        বুঝা যায়, কিভাবে করা হলো সেটা বিষয় না। declarative code ব্যবহার করে খুব
        সহজে component তৈরী করা হয়। component গুলোকে hierarchical structure এ
        অর্গানাইজ করা হয়। state এবং props হলো কম্পোন্যান্ট এর প্রধান উপাদান।
        এপ্লিকেশনের যে অংশ পরিবর্তন হতে পারে সেটা কে state দ্বারা রিপ্রেজেন্ট
        করা হয়। আর props এর মাধ্যমে tree structure এ এক component থেকে অন্য
        component এ ডাটা পাস করা হয়। রিয়েক্ট এ এই ডাটা পাস হয় unidirectional
        ওয়েতে।'></Qna>
      <Qna
        question='What are the differences between props and state?'
        answer='props দ্বারা এক component থেকে অন্য component এ ডাটা পাস করা হয়। অপরদিকে
        এপ্লিকেশনের যে অংশ পরিবর্তন হতে পারে সেটা কে state দ্বারা রিপ্রেজেন্ট
        করা হয়। props হলো read-only এবং immutable, অর্থাৎ এদের মডিফাই করা যায়
        না। আর state হলো mutable অর্থাৎ এটা পরিবর্তন করা যায়। তবে এই পরিবর্তন
        শুধুমাত্র যে কম্পোন্যান্টে state ডিক্লেয়ার করা হয়েছে সে কম্পোন্যান্টে
        করা যায়। কোনো কম্পোন্যান্ট এ state থাকতেও পারে আবার নাও থাকতে পারে।
        props এর মাধ্যমে state এর ডাটা চাইলে অন্য কম্পোন্যান্টে পাস করা যায়।'></Qna>
    </footer>
  );
};

export default Footer;
