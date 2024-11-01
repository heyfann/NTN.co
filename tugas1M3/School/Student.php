<?php
namespace School;

require_once 'Person.php';

class Student extends Person {
    public function introduce() {
        return "Hello, I'm {$this->name}, and I am a student.";
    }
}
