import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faHeart, faImage } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://newt-io-backend-8c9be281b359.herokuapp.com/';
axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;

const PageContainer = styled.div`
  max-width: 800px;
  margin: 80px auto 0;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 10px;
    margin-top: 60px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #7fbf7f;
  font-size: 2.5rem;
  text-transform: lowercase;
`;

const InsightForm = styled.form`
  margin-bottom: 30px;
`;

const InsightInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 2px solid #7fbf7f;
  border-radius: 10px;
  resize: none;
  font-size: 1rem;
`;

const InsightButton = styled.button`
  background-color: #7fbf7f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  float: right;

  &:hover {
    background-color: #6ca86c;
  }
`;

const ImageUpload = styled.input`
  display: none;
`;

const ImageUploadLabel = styled.label`
  display: inline-block;
  background-color: #7fbf7f;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  margin-right: 10px;

  &:hover {
    background-color: #6ca86c;
  }
`;

const Insight = styled.div`
  background-color: rgba(127, 191, 127, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
`;

const InsightHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #7fbf7f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Username = styled.span`
  font-weight: bold;
`;

const InsightContent = styled.p`
  margin-bottom: 10px;
`;

const InsightImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const InsightActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #7fbf7f;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    color: #6ca86c;
  }
`;

const CommentSection = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #7fbf7f;
`;

const CommentForm = styled.form`
  display: flex;
  margin-bottom: 10px;
`;

const CommentInput = styled.input`
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #7fbf7f;
  border-radius: 5px;
`;

const CommentButton = styled.button`
  background-color: #7fbf7f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
`;

const Comment = styled.div`
  margin-bottom: 5px;
`;

const LikeButton = styled(ActionButton)`
  color: ${props => props.liked ? '#ff6b6b' : '#7fbf7f'};
`;

const LikeCount = styled.span`
  margin-left: 5px;
  font-size: 0.9rem;
`;

const CommunityHub = () => {
  const [insights, setInsights] = useState([]);
  const [newInsight, setNewInsight] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    console.log('API URL:', process.env.REACT_APP_API_URL);
    const fetchInsights = async () => {
      try {
        console.log('Fetching insights...');
        const response = await axios.get('/api/insights');
        console.log('Insights response:', response);
        setInsights(response.data);
      } catch (error) {
        console.error('Error fetching insights:', error.response ? error.response.data : error.message);
      }
    };
    fetchInsights();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newInsight.trim()) {
      const newInsightObj = {
        content: newInsight,
        username: 'User',
        image: image,
        comments: [],
        likes: 0
      };
      try {
        console.log('Posting new insight:', newInsightObj);
        const response = await axios.post('/api/insights', newInsightObj);
        console.log('Post insight response:', response);
        setInsights([response.data, ...insights]);
        setNewInsight('');
        setImage(null);
      } catch (error) {
        console.error('Error posting insight:', error.response ? error.response.data : error.message);
      }
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleComment = async (insightId, comment) => {
    try {
      console.log('Posting comment:', { insightId, comment });
      const response = await axios.post(`/api/insights/${insightId}/comments`, { comment });
      console.log('Comment response:', response);
      
      const updatedInsights = insights.map(insight => {
        if (insight._id === insightId) {
          return {
            ...insight,
            comments: Array.isArray(insight.comments) 
              ? [...insight.comments, comment]
              : [comment]
          };
        }
        return insight;
      });

      setInsights(updatedInsights);
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const handleLike = async (insightId) => {
    try {
      console.log('Liking insight:', insightId);
      const response = await axios.post(`/api/insights/${insightId}/like`);
      console.log('Like response:', response);
      setInsights(insights.map(insight => 
        insight._id === insightId 
          ? { ...insight, likes: response.data.likes, liked: true }
          : insight
      ));
    } catch (error) {
      console.error('Error liking insight:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <Header>
          <Title>newt.io community hub</Title>
        </Header>
        <InsightForm onSubmit={handleSubmit}>
          <InsightInput 
            value={newInsight} 
            onChange={(e) => setNewInsight(e.target.value)}
            placeholder="Share your research project or thoughts..."
          />
          <ImageUpload 
            type="file" 
            id="image-upload" 
            accept="image/*" 
            onChange={handleImageUpload}
          />
          <ImageUploadLabel htmlFor="image-upload">
            <FontAwesomeIcon icon={faImage} /> Upload Image
          </ImageUploadLabel>
          <InsightButton type="submit">Post Insight</InsightButton>
        </InsightForm>
        {insights.map((insight, index) => (
          <React.Fragment key={insight._id || index}>
            <Insight>
              <InsightHeader>
                <Avatar>
                  <FontAwesomeIcon icon={faUser} />
                </Avatar>
                <Username>{insight.username}</Username>
              </InsightHeader>
              <InsightContent>{insight.content}</InsightContent>
              {insight.image && <InsightImage src={insight.image} alt="Insight" />}
              <InsightActions>
                <ActionButton><FontAwesomeIcon icon={faComment} /> Comment</ActionButton>
                <LikeButton onClick={() => handleLike(insight._id)} liked={insight.liked}>
                  <FontAwesomeIcon icon={faHeart} /> Like
                  <LikeCount>{insight.likes || 0}</LikeCount>
                </LikeButton>
              </InsightActions>
              <CommentSection>
                {Array.isArray(insight.comments) && insight.comments.map((comment, commentIndex) => (
                  <Comment key={`${insight._id}-comment-${commentIndex}`}>{comment}</Comment>
                ))}
                <CommentForm onSubmit={(e) => {
                  e.preventDefault();
                  const comment = e.target.elements.comment.value;
                  if (comment.trim()) {
                    handleComment(insight._id, comment);
                    e.target.elements.comment.value = '';
                  }
                }}>
                  <CommentInput type="text" name="comment" placeholder="Add a comment..." />
                  <CommentButton type="submit">Post</CommentButton>
                </CommentForm>
              </CommentSection>
            </Insight>
          </React.Fragment>
        ))}
      </ContentWrapper>
    </PageContainer>
  );
};

export default CommunityHub;
