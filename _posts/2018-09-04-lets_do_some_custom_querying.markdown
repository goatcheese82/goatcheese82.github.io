---
layout: post
title:      "Let's Do Some Custom Querying!"
date:       2018-09-05 02:04:19 +0000
permalink:  lets_do_some_custom_querying
---


What I wanted: I wanted to show to which groups a particular user is the admin.  

User's Groups @ users/1/my_groups



How I accomplished it:

First I needed to create the route which is nested in the :users resource

```
routes.rb

  resources :users do
    resources :goals, only: [:show, :index, :new, :create]
    get "/my_groups", to: "users#admin_of"

  end
```

Then I needed to create the action for that route

```
users_controller.rb

  def admin_of
    @user = User.find(params[:user_id])
    @groups = @user.where(group_admin: true)
  end
```

That's ugly, though, we don't want the controller talking to the DB, so let's do this instead

```
users_controller.rb

  def admin_of
    @user = User.find(params[:user_id])
    @groups = @user.group_assignments.is_admin?
  end
```


```
group_assignment.rb

  def self.is_admin?
    where(group_admin: true)
  end
```


Ok, that looks much better.

Now for the view...

```
admin_of.html.erb

<% @groups.each do |ga| %>
<%= link_to ga.group.title, group_path(ga) %>
<% end %>
```

And then let's look at our view...


There it is!  We did it!
