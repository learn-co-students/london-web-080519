require_relative './config/environment'

if ActiveRecord::Base.connection.migration_context.needs_migration?
  raise 'Migrations are pending. Run `rake db:migrate` to resolve the issue.'
end

# Make sure you include this to get PATCH and DELETE requests to work via your forms.
use Rack::MethodOverride

use BooksController
use AuthorsController
run ApplicationController
