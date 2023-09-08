<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Vacant;
use Illuminate\Auth\Access\Response;

class VacantPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Vacant $vacant): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Vacant $vacant): bool
    {
        return $vacant->user()->is($user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Vacant $vacant): bool
    {
        return $this->update($user, $vacant);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Vacant $vacant): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Vacant $vacant): bool
    {
        //
    }
}
