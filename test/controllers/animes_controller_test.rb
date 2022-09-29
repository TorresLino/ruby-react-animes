require "test_helper"

class AnimesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @anime = animes(:one)
  end

  test "should get index" do
    get animes_url, as: :json
    assert_response :success
  end

  test "should create anime" do
    assert_difference("Anime.count") do
      post animes_url, params: { anime: { duration: @anime.duration, episodes: @anime.episodes, title: @anime.title } }, as: :json
    end

    assert_response :created
  end

  test "should show anime" do
    get anime_url(@anime), as: :json
    assert_response :success
  end

  test "should update anime" do
    patch anime_url(@anime), params: { anime: { duration: @anime.duration, episodes: @anime.episodes, title: @anime.title } }, as: :json
    assert_response :success
  end

  test "should destroy anime" do
    assert_difference("Anime.count", -1) do
      delete anime_url(@anime), as: :json
    end

    assert_response :no_content
  end
end
