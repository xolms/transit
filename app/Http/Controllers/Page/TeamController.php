<?php

namespace App\Http\Controllers\Page;

use App\Leader;
use App\Page;
use App\Team;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TeamController extends Controller
{

    function __construct(Team $team, Leader $leader, Page $page)
    {
        $this->team = $team;
        $this->leader = $leader;
        $this->page = $page;
    }

    public function index() {
        $meta = $this->getCache('meta:team', $this->page->where('alias', 'team')->first());
        $team = $this->getCache('team', $this->team->all());
        $leader = $this->getCache('leader', $this->leader->all());
        return view('pages.team', [
            'team' => $team,
            'leader' => $leader,
            'meta' => $meta
        ]);
    }
}
