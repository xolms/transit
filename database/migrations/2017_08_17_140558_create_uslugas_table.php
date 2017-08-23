<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUslugasTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('uslugas', function(Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('img_index');
            $table->string('img');
            $table->string('alias');
            $table->string('title');
            $table->string('description');
            $table->string('keywords');
            $table->text('text');

            $table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('uslugas');
	}

}
