# Sinatra Forms Associated Objects

## Objectives

* Describe how mass-assignment works in relation to hashes
* Describe how the params hash is built
* Describe how to nest hashes inside of the params hash
* Describe how to nest arrays inside of the params hash
* Demonstrate how to use params hash to mass-assign and create related objects

## Steps

1. Add a `CreateAuthors` migration (name:string, dob:datetime)
2. Add an `AddAuthorIdColumnToBooks` migration (author_id:integer)
3. Add seeds for author and associate them with their books
4. Create routes/views/actions for author#show and author#index
5. Update view/action for books#create to include adding authors
6. Create route/view/action form author#create to add two books when creating an author
