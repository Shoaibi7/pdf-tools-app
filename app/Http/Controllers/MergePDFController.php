<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MergePDFController extends Controller
{
    public function index(){
        
        return Inertia::render('merge-pdf/MergePDF');
    }
}
