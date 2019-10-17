class Api::V1::PostsController < ApplicationController

    def index
        render json: Post.all
    end

    def show
        render json: Post.find(params[:id])
    end

    def create
        post = Post.create(post_params)
        post.update(user: @current_user)
        if (post.valid?)
            render json: post
        else
            render json: { errors: post.errors.full_messages }, status: :not_accepted
        end
    end

    private

    def post_params
        params.require(:post).permit(:content, :title)
    end
end
