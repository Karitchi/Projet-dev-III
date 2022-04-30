<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 */
class User
{
    /**
     * @MongoDB\Id
     */
    private $_id;
    /**
     * @MongoDB\Field(type="string")
     */
    public $email;

    /**
     * @MongoDB\Field(type="string")
     */
    private $password;

    /**
     * @MongoDB\Field(type="string")
     */
    private $role;

    /**
     * @MongoDB\Field(type="string")
     */
    public function get_user(){
        return $this->email;
    }
}