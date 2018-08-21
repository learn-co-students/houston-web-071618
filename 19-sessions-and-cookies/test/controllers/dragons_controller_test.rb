require 'test_helper'

class DragonsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get dragons_show_url
    assert_response :success
  end

  test "should get index" do
    get dragons_index_url
    assert_response :success
  end

  test "should get edit" do
    get dragons_edit_url
    assert_response :success
  end

  test "should get new" do
    get dragons_new_url
    assert_response :success
  end

end
