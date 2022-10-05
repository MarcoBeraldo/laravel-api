@extends('layouts.app')

@section('content')
    <header>
        <h1>Crea Post</h1>
    </header>
    <hr>
    <div class="container">

        @include('includes.admin.posts.form')
    </div>
@endsection
