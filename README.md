# Member Portal

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Why?

I'm not an experienced software dev, I did some learning a little while back. I'm doing some admin work at a dance studio and while no code tools are getting pretty impressive, I couldn't find something to do what I wanted at a price that makes sense for us right now. That said, this may never get to production, really I just wanted to get my feet wet with this.

This is for a small dance studio/event space so the needs of this platform is also small. I'm already managing the accounts in [airtable](https://airtable.com/) and planning to integrate it with this member portal, so any new administrators at the studio have a friendly interface to interact with. The built in airtable interface is acting as the member portal for the time being, but I can only give clients read-only access.

## Project Scope

This won't need to host many users, so it won't need a lot of the features and automations of most web apps. A small studio should have a hands on feel anyway.

- A place for people to sign up
- Check their account details
- Make changes to their notification settings, etc...
- See remaining class credits and purchase more
- Maybe define teacher roles for taking attendance and whatnot

### Considerations

I'm read that it's not a good idea to keep passwords in airtable, unless I hash them maybe. Regardless airtable might not work with next-auth anyway, so using a normal database for the login authentication that connects users with their airtable data may be the way to go.
