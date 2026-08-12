create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  credits integer not null default 100,
  created_at timestamptz not null default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  prompt text not null,
  status text not null default 'draft'
    check (status in ('draft', 'processing', 'completed', 'failed')),
  video_url text,
  thumbnail_url text,
  duration integer,
  aspect_ratio text not null default '16:9',
  style text not null default 'Cinematic',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table profiles enable row level security;
alter table projects enable row level security;

create policy "Users can view their own profile"
on profiles
for select
using (auth.uid() = id);

create policy "Users can update their own profile"
on profiles
for update
using (auth.uid() = id);

create policy "Users can view their own projects"
on projects
for select
using (auth.uid() = user_id);

create policy "Users can create their own projects"
on projects
for insert
with check (auth.uid() = user_id);

create policy "Users can update their own projects"
on projects
for update
using (auth.uid() = user_id);

create policy "Users can delete their own projects"
on projects
for delete
using (auth.uid() = user_id);
