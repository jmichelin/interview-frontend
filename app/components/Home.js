/**
 * Created by jmichelin on 12/28/16.
 */
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Goals of the Interview</h2>
        <h4>To evaluate candidate's awareness of self contribution</h4>
        <ol>
          <li>What they did</li>
          <li>Why they did it</li>
          <li>How that impacted the team</li>
          <li>What effect that had on the final deliverable</li>
        </ol>
        <h4>To evaluate candidate's actual contribution</h4>
        <ol>
          <li>Diagram a rough overview of the project, and emphasis own contribution to it</li>
          <li>What technology decisions the they made and why</li>
          <li>What impact would the product have had if candidate was absent or off-course</li>
        </ol>
        <h4>To evaluate candidate's reasons for making certain decisions</h4>
        <ol>
          <li>What alternative approaches were considered and how they were unsuitable</li>
          <li>What challenges were encountered and overcome, or avoided by changing direction</li>
        </ol>
        <h4>To evaluate candidate's coding maturity/comfort </h4>
        <em>Are they JR, are they SR, always be looking for these in every answer</em>
        <h4>Nervous Tells</h4>
        <ol>
          <li>Do they ask for guidance on best practices, or just do them</li>
          <li>Do they answer the question, or add requirements</li>
          <li>Do they just start coding, or do they visualize first, pseudocode, etc. before solving</li>
          <li>Do they ask clarifying questions or just jump in</li>
          <li>Do they communicate using proper terminology (stack, queue, hash, instead of object/array/etc.)</li>
          <li>Do they write on the board what they are communicating or thinking</li>
          <li>Do they come across too academic</li>
          <li>Do they answer too detailed?</li>
          <li>Do they lack detail when it was warranted?</li>
        </ol>
        <h4>To evaluate candidate's thought process</h4>
        <ol>
          <li>Communicates adequately</li>
          <li>Engages while thinking</li>
          <li>Attempts to understand the requirements</li>
          <li>Logical, methodical, clear, best practices</li>
          <li>Simulates logic correctly</li>
          <li>Edge cases</li>
          <li>Debugs</li>
        </ol>
        <h4>To evaluate candidate's leadership maturity</h4>
        <ol>
          <li>How did they help a team member in distress</li>
          <li>How did they contribute to the growth of others</li>
          <li>How did they encourage a struggling team member</li>
          <li>How did they stay the course</li>
          <li>How did they understand the signs of priority, urgency</li>
        </ol>
        <h4>To evaluate candidate's ability to think when caught off guard</h4>
        <ol>
          <li>Drill into more details on anything discussed</li>
          <li>Ask questions about alternative approaches/technology that were rejected, to uncover understanding of said alternate</li>
          <li>If you could make a pull request to <strong><em>x</em></strong> framework, what would it be and why</li>
        </ol>
        <h4>To Evaluate what kinds of questions they might ask about the company</h4>
        <ol>
          <li>Did they ask anything about the potential culture fit?</li>
          <li>Did they ask any meaningful questions about funding or direction?</li>
          <li>Did they ask about promotions and bonuses?</li>
        </ol>
      </div>
    )
  }
}

export default Home