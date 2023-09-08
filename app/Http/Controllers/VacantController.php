<?php

namespace App\Http\Controllers;

use App\Models\Vacant;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

use Inertia\Inertia;
use Inertia\Response;

class VacantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() : Response
    {
        return Inertia::render('Vacant/Index', [
            'vacants' => Vacant::with('user:id,name')->latest()->get(),
        ]); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) : RedirectResponse
    {
        $validated = $request->validate([
            'area' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'required',
            'date_end' => 'required',
        ]);

        $request->user()->vacants()->create($validated);

        return redirect(route('vacants.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Vacant $vacant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vacant $vacant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vacant $vacant) : RedirectResponse
    {
        $this->authorize('update', $vacant);
 
        $validated = $request->validate([
            'area' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'required',
            'date_end' => 'required',
        ]);
 
        $vacant->update($validated);
 
        return redirect(route('vacants.index'));
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vacant $vacant) : RedirectResponse
    {
        $this->authorize('delete', $vacant);

        $vacant->delete();

        return redirect(route('vacants.index'));
    }
}
